import {useState} from "react";
import "./style.css"
import {GrClose} from "react-icons/gr"

const Grades = () => {

    let [file,
        setFile] = useState(null)
    let [fileType,
        setFileType] = useState(null)
    let [isFeedbackOpened,
        setIsFeedbackOpened] = useState(false)

    // const handleFileInput = (e) => {     const fileType = e.target.files[0].type;
    //     setFile(URL.createObjectURL(e.target.files[0]))
    // fileType.startsWith("image/")         ? setFileType("image")         :
    // setFileType("pdf"); }


    return (
        <div className="grades">
            <div className="top-grades">
                <div className="left">
                    <div className="assignment-points">100 points</div>
                </div>
            </div>
            <div className="bottom-grades">
                <div className="left">
                    <div className="student">
                        <div className="left-student">
                            <div className="profile">
                                <img
                                    src="https://img.freepik.com/free-photo/worldface-british-guy-white-background_53876-146315.jpg?t=st=1691943364~exp=1691943964~hmac=2a2f15af13cdfd79c9db0f8ca7ee002032a02f8f1475b85c7e90a0c4b3b5a60f"
                                    alt="profile picture"/>
                            </div>
                            <div className="name">Amr Maket</div>
                        </div>
                        <div className="right-student">/100</div>
                    </div>
                    <div className="student">
                        <div className="left-student">
                            <div className="profile">
                                <img
                                    src="https://img.freepik.com/free-photo/worldface-british-guy-white-background_53876-146315.jpg?t=st=1691943364~exp=1691943964~hmac=2a2f15af13cdfd79c9db0f8ca7ee002032a02f8f1475b85c7e90a0c4b3b5a60f"
                                    alt="profile picture"/>
                            </div>
                            <div className="name">Amr Maket</div>
                        </div>
                        <div className="right-student">/100</div>
                    </div>
                    <div className="student">
                        <div className="left-student">
                            <div className="profile">
                                <img
                                    src="https://img.freepik.com/free-photo/worldface-british-guy-white-background_53876-146315.jpg?t=st=1691943364~exp=1691943964~hmac=2a2f15af13cdfd79c9db0f8ca7ee002032a02f8f1475b85c7e90a0c4b3b5a60f"
                                    alt="profile picture"/>
                            </div>
                            <div className="name">Amr Maket</div>
                        </div>
                        <div className="right-student">/100</div>
                    </div>
                    <div className="student">
                        <div className="left-student">
                            <div className="profile">
                                <img
                                    src="https://img.freepik.com/free-photo/worldface-british-guy-white-background_53876-146315.jpg?t=st=1691943364~exp=1691943964~hmac=2a2f15af13cdfd79c9db0f8ca7ee002032a02f8f1475b85c7e90a0c4b3b5a60f"
                                    alt="profile picture"/>
                            </div>
                            <div className="name">Amr Maket</div>
                        </div>
                        <div className="right-student">/100</div>
                    </div>
                    <div className="student">
                        <div className="left-student">
                            <div className="profile">
                                <img
                                    src="https://img.freepik.com/free-photo/worldface-british-guy-white-background_53876-146315.jpg?t=st=1691943364~exp=1691943964~hmac=2a2f15af13cdfd79c9db0f8ca7ee002032a02f8f1475b85c7e90a0c4b3b5a60f"
                                    alt="profile picture"/>
                            </div>
                            <div className="name">Amr Maket</div>
                        </div>
                        <div className="right-student">/100</div>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <div className="name">Amr Maket</div>
                        <div className="grade-input">
                            <input type="text"/>
                            /100
                        </div>
                    </div>
                    <button className="give-feedback" onClick={(e) => setIsFeedbackOpened(true)}>
                        Give Feedbak
                    </button>
                    {isFeedbackOpened && (
                        <div className="feedback">
                            <textarea placeholder="Provide a feedback" cols="20" rows="10"></textarea>
                            <div className="close">
                                <GrClose size={20} onClick={(e) => setIsFeedbackOpened(false)}/>
                            </div>
                        </div>
                    )}
                    <div className="submit-grade">Submit Grade</div>
                    {/* <img src="" alt=""/> {file && fileType === "image"
                        ? (<img src={file}/>)
                        : (<iframe src={file} alt=""/>)} */}
                </div>
            </div>
        </div>
    );
}

export default Grades