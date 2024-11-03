import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, image, bookName, author, tags, category} = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
            <figure className='bg-base-200 py-8 rounded-2xl'>
            <img
                src={image}
                className='h-[166px]'
                alt="{bookName}" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-4'>
                {
                    tags.map(tag => <button className="btn btn-xs bg-[#23BE0A0D] text-[#23BE0A]">{tag}</button>)
                }
                </div>
                <h2 className="card-title">
                {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author} </p>
                <div className="border-t-2 border-dashed my-2"></div>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>
                </div>
            </div>
        </div>
      </Link>
    );
};

export default Book;