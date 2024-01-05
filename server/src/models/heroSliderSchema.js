import mongoose, { Schema } from "mongoose"

const HeroSliderSchema = new Schema(
    {
        image : {type : String,required : true},
        title : {type : String ,required : true},
        description : {type : String ,required : true}
    },{timestamps : true}
)

export default mongoose.model("heroSlider" , HeroSliderSchema)