import mongoose,{Schema} from "mongoose";

const projectSchema = new Schema(
    {
        title : String,
        info : String,
        technology : String,
        github : String,
        summary : String,
        image : String,
        livedemo : String,
        },
    {
        timestamps:true,
    }
);

const Project = mongoose.models.project || mongoose.model("project",projectSchema);

export default Project;