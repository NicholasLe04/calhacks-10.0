import React from 'react';
import './Hotbar.css';
import Treebox from './Treebox';
import TreeCard from '../components/TreeCard';

function Hotbar({category}) {

    const treeCard = [
        {
            title: "Hi",
            author: "Hello",
            upvotes: 3,
            downvotes: 4,
            treeImageURL: "",
        }  ,
        {
            title: "Hi",
            author: "Dom",
            upvotes: 3,
            downvotes: 4,
            treeImageURL: "",
        },
        {
            title: "Hi",
            author: "Zon",
            upvotes: 3,
            downvotes: 4,
            treeImageURL: "",
        },
        {
            title: "Hi",
            author: "Job",
            upvotes: 3,
            downvotes: 4,
            treeImageURL: "",
        }
    ]

    
    return (
        <div className="hotbar">
            <h4 id={category}>{category}</h4>
            <div className='treecube'>
                {treeCard.map((e) => <TreeCard title={e.title} author={e.author} upvotes={e.upvotes} downvotes={e.downvotes} treeImageURL={e.treeImageURL} />)}
            </div>
        </div>
    );
}

export default Hotbar;