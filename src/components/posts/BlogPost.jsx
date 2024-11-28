// Atomic Design: Post component for displaying individual Post details.

export function BlogPost({ data }) {
    console.log('BlogPost', data);
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={data.cover} />
                    </div>
                </div>
                <p className="card-title">{data.content}</p>
            
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
}
