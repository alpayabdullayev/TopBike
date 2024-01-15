import mongoose ,{Schema} from "mongoose";

const SizeSchema = new Schema(
    {
        name : {type :String ,required: true},
    }
)

export default mongoose.model("topBikeSize",SizeSchema) 