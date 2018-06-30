import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";


class Home extends Component {
    state={
        articles: [],
        title: "",
        date: "",
        url: ""
    };

    componentDidMount(){
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles(id)
            .then(res =>
                this.setState({ articles: res.data, title: "", date: "", url: "" })
            )
            .catch(err => console.log(err))

    };

    saveArticle = id => {
        API.saveArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name,value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.url){
            API.getArticle({
                title: this.state.title,
                date: this.state.date,
                url: this.state.url
            })
                .then(res=> this.loadArticles())
                .catch(err=> console.log(err));
        }
    };

    render(){

        return(
            <div>

           <Jumbotron>
               <h1>New York Times Article Scrubber</h1>
               <h3>Search and annotate articles of interest</h3>
           </Jumbotron>
            <form>
              <Input
               value={this.state.title}
               onChange={this.handleInputChange}
               name="title"
               placeholder="Topic (required)"
              />
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Start Year (required)"
                />
               <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="date2"
                placeholder="End Year (required)"
            />
           <FormBtn
            disabled={!(this.state.author && this.state.title)}
            onClick={this.handleFormSubmit}
            >
            Submit
            </FormBtn>
        </form>
                <div>
                    <h1>Results:</h1>
                    {this.state.articles.length ? (
                        <List>
                            {this.state.articles.map(article=> (
                                <ListItem key={article._id}>
                                    <Link to ={"/article/" + article._id}>
                                        <strong>
                                            {article.title}  {article.url}
                                        </strong>
                                    </Link>
                                    <SaveBtn onClick={() => this.saveArticle(article._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Results Displayed</h3>
                    )}
                </div>



            </div>


        );
    }
}

export default Home;