import { createBagWithItems } from '~/services/bag/bag';

const mockCreateBag = jest.fn();
const mockCreateItem = jest.fn();

jest.mock('~/db/operators/bag', () => {
  const original = jest.requireActual('~/db/operators/bag');
  return {
    ...original,
    createBag: (...args: any[]) => mockCreateBag(...args),
  };
});

jest.mock('~/db/operators/item', () => {
  const original = jest.requireActual('~/db/operators/item');
  return {
    ...original,
    createItem: (...args: any[]) => mockCreateItem(...args),
  };
});

describe('createBagWithItems', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates a bag and its associated food items', async () => {
    mockCreateBag.mockResolvedValue(1);

    const itemInserts = {
      foods: [
        {
          header: 'Apple',
          quantity: 5,
          expiry_date: '2025-01-01',
          added_at: '2025-08-19',
          body: 'Fresh apples',
        },
      ],
    };

    await createBagWithItems('Test Bag', 'Description', '2025-08-19', true, itemInserts);

    expect(mockCreateBag).toHaveBeenCalledWith('Test Bag', 'Description', '2025-08-19', true);

    expect(mockCreateItem).toHaveBeenCalledWith(expect.anything(), {
      header: 'Apple',
      quantity: 5,
      expiry_date: '2025-01-01',
      added_at: '2025-08-19',
      body: 'Fresh apples',
      bag_id: 1,
    });
  });
});
