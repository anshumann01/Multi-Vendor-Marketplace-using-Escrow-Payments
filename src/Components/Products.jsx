import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react"; // ✅ import icon

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    let updated = [...products];

    if (selectedCategory !== "all") {
      updated = updated.filter((p) => p.category === selectedCategory);
    }

    if (search) {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOption === "low") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  }, [search, sortOption, selectedCategory, products]);

  if (loading) {
    return (
      <h2 className="text-center text-2xl mt-10 font-semibold">
        Loading products...
      </h2>
    );
  }

  return (
    <div className="p-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded-lg w-full sm:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded-lg w-full sm:w-1/4"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>

        <select
          className="border p-2 rounded-lg w-full sm:w-1/4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <ShoppingCart size={18} strokeWidth={2.5} />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-4 hover:scale-105 transition"
            />

            <h3 className="text-sm font-semibold line-clamp-2 text-center">
              {product.title}
            </h3>

            <p className="text-lg font-bold mt-2">₹ {product.price}</p>

            <span className="text-xs text-gray-500 mt-1 capitalize">
              {product.category}
            </span>

            {/* ✅ Add to Cart Button with Icon */}
            <button className="mt-3 flex items-center gap-2 px-4 py-2 bg-[#29A37A] text-[#182A33] rounded-lg hover:opacity-90 transition">
              <ShoppingCart size={18} strokeWidth={2.5} />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;