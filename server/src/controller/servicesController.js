import Services from "../models/servicesSchema.js";

export const getAllServices = async (req, res) => {
    try {
      const services = await Services.find({});
      res.status(200).json( services );
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getProductById = async (req, res) => {
    try {
      const services = await Services.findById(req.params.id);
      if (!services) {
        return res.status(404).json({ message: "Not Found" });
      }
      res.json(services);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  };

export const createServices = async (req, res) => {
    try {
      const services = new Services({
        name: req.body.name,
        description: req.body.description,
        image:req.file.path   
      });
  
      await services.save();
      res.send(services);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


