import Category from "../models/categorySchema.js";

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = new Category({
      name: name,
    });

    await newCategory.save();
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).populate("product");

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id).populate("product");

    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCategory = await Category.findByIdAndDelete(id);
  
      if (!deleteCategory) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      res.status(200).json(deleteCategory);
  
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
};


export const updateCategory = async (req,res) =>{
    try {
        const {id} = req.params
        const { name} = req.body

        const updateCategory = await Category.findByIdAndUpdate(id)
        

        if (!updateCategory) {
            return res.status(404).json({ message: "Product not found" });
        }

        updateCategory.name = name;

        await updateCategory.save();
        res.status(200).json({ updateCategory });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
        
    }
}