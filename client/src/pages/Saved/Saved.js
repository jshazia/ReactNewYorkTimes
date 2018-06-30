import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

class Saved extends Component {

    state = {
        article: {}
    };

    componentDidMount(){
        API.getArticle(this.props.match.params.id)
            .then(res => this.setState({ article: res.data }))
            .catch(err => console.log(err));
    }

    render (){

        return(
            <div>
              <h1>{ this.state.article.title } { this.state.article.url }</h1>
                <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
            </div>
        )

    }

}

export default Saved;