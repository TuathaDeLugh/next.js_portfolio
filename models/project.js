import mongoose,{Schema} from "mongoose";

const projectSchema = new Schema(
    {
        title : String,
        info : String,
        technology : String,
        github : String,
        summary : String,
        image: {
            name: {
            type: String,
            required: true,
          },
            link:{
            type: String,
            required: true,
          } 
        },
        livedemo : String,
        },
    {
        timestamps:true,
    }
);

const Project = mongoose.models.project || mongoose.model("project",projectSchema);

export default Project;