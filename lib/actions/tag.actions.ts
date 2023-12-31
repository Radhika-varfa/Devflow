"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag  from "@/database/tag.model";
// import Question from "@/database/question.model";
// import { FilterQuery } from "mongoose";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
    try {
      connectToDatabase();
  
      const { userId } = params;
  
      const user = await User.findById(userId);
  
      if(!user) throw new Error("User not found");
  
      // Find interactions for the user and group by tags...
      // Interaction...
  
      return [ {_id: '1', name: 'tag'}, {_id: '2', name: 'tag2'}]
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  export async function getAllTags(params: GetAllTagsParams) {
    try {
      connectToDatabase();
  
    //   const { searchQuery, filter, page = 1, pageSize = 10 } = params;
    //   const skipAmount = (page - 1) * pageSize;
  
    //   const query: FilterQuery<typeof Tag> = {};
  
    //   if(searchQuery) {
    //     query.$or = [{name: { $regex: new RegExp(searchQuery, 'i')}}]
    //   }
  
    //   let sortOptions = {};
  
    //   switch (filter) {
    //     case "popular":
    //       sortOptions = { questions: -1 }
    //       break;
    //     case "recent":
    //       sortOptions = { createdAt: -1 }
    //       break;
    //     case "name":
    //       sortOptions = { name: 1 }
    //       break;
    //     case "old":
    //       sortOptions = { createdAt: 1 }
    //       break;
      
    //     default:
    //       break;
    //   }
  
    //   const totalTags = await Tag.countDocuments(query);
  
      const tags = await Tag.find({})
        // .sort(sortOptions)
        // .skip(skipAmount)
        // .limit(pageSize);
  
        // const isNext = totalTags > skipAmount + tags.length;
  
      return { tags}
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  