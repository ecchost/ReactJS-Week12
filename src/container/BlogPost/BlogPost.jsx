import React, { Component } from "react";
// import "./BlogPost.css";
import Post from "../../components/BlogPost/Post";
// import API from "../../services";
import firebase from "firebase";
import firebaseConfig from "../../firebase/config";

class BlogPost extends Component {
  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.state = {
      listArticle: [],
    };
  }

  ambilDataDariServerAPI = () => {
    let ref = firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  saveDataToServerAPI = () => {
    firebase.database().ref("/").set(this.state);
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.saveDataToServerAPI();
      console.log(this.state);
    }
  }

  handleDelete = (idArticle) => {
    const { listArticle } = this.state;
    const newState = listArticle.filter((data) => {
      return data.uid !== idArticle;
    });
    this.setState({ listArticle: newState });
  };

  handleTombolSimpan = (event) => {
    let title = this.refs.judulArtikel.value;
    let body = this.refs.isiArtikel.value;
    let uid = this.refs.uid.value;

    if (uid && title && body) {
      const { listArticle } = this.state;
      const articleIndex = listArticle.findIndex((data) => {
        return data.uid === uid;
      });
      listArticle[articleIndex].title = title;
      listArticle[articleIndex].body = body;
      this.setState({ listArticle });
    } else if (title && body) {
      const uid = new Date().getTime().toString();
      const { listArticle } = this.state;
      listArticle.push({ uid, title, body });
      this.setState({ listArticle });
    }
    this.refs.judulArtikel.value = "";
    this.refs.isiArtikel.value = "";
    this.refs.uid.value = "";
  };

  render() {
    return (
        <div className="post-artikel">
            <div className="form pb-2 border-bottom">
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" name="title" ref="judulArtikel"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Isi</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="body" rows="3" name="body" ref="isiArtikel"></textarea>
                    </div>
                </div>
                <input type="hidden" name="uid" ref="uid"/>
                <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
            </div>
            <h2>Daftar Artikel</h2>
            {
                this.state.listArticle.map(article => {
                    return <Post key={article.uid} idArticel={article.uid} judul={article.title} isi={article.body} hapusArtikel={this.handleDelete} />
                })
            }
        </div>
    )
  }
}

export default BlogPost;
