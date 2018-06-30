import axios from "axios";

export default{
    getArticles: function(){
        return axios.get ("/api/article");
    },
    getArticle: function(id){
        return axios.get("/api/article/" + id);
    },
    deleteArticle: function(id){
        return axios.delete("/api/article/" + id);
    },
    saveArticle: function(articleData){
        return axios.post("/api/article", articleData);
    }
};