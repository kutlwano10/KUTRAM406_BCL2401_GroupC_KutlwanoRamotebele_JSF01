export async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        if (!res.ok) {
          throw new Error(
            "Data fetching failed :( , Please check your network connection and reload."
          );
        }
        data = await res.json();
        return data;
        console.log(data)
      } catch (error) {
        console.error("Error fetching Products:", error);
      }
    
  };


