import '../../base.css'
import './styles.css'

const Discussion = (props) => {

    const discussions = props.discussions;

    return (
        <div className="discussions-main-container flex flex-col align-center justify-center padding-m border">
            <h2 className='padding-s'>Blog</h2>
            <div className="discussions-list flex flex-col gap-l align-center">
                {discussions.map((discussion) => (
                    <div className="discussion-preview flex flex-col padding-s justify-center align-center gap-s card-border" key={discussion.id}>
                        <h3>{discussion.title}</h3>
                        <div>{discussion.details}</div>
                        <h5>Written by: {discussion.author}</h5>
                    </div>
                ))}
                <div className='width-40 padding-s'>
                    <button className='white-text'>
                        <h3>
                            Start a blog!
                        </h3>
                    </button>
                </div>
                
            </div>
        </div>
        
    );
}
 
export default Discussion;