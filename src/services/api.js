const BASE_URL = "https://fakestoreapi.com";

/**
 * Get all products
 */
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
