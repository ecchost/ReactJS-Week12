import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                <button className="btn btn-sm btn-warning" 
                    onClick={() => { if (window.confirm('Apakah anda yakin menghapus artikel ini?')) 
                    props.hapusArtikel(props.idArticel)}}>Hapus</button>
            </div>
            <br></br>
        </div>
    )
}

export default Post;