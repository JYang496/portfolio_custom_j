import './Editor.sass'

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import {useState} from "react";

export function Editor() {
    const [articleInfo, setArticleInfo] = useState({
        title: '',
        description: ''
    });

    const onChangeValue = (e) => {
        setArticleInfo({
            ...articleInfo,
            [e.target.name]:e.target.value
        });
    }
    const onChangeDescription = (value) => {
        setArticleInfo({
            ...articleInfo,
            description: value
        });
    }

    return (
        <div>
            <label className="font-weight-bold"> Title <span className="required"> * </span> </label>
            <input type="text" name="title" value={articleInfo.title} onChange={onChangeValue}  className="form-control" placeholder="Title" required />

            <ReactQuill
                theme='snow'
                value={articleInfo.description}
                onChange={onChangeDescription}
                style={{minHeight: '300px'}}
            />
            <h1>{articleInfo.title}</h1>
            <h1>{articleInfo.description}</h1>
        </div>
    );
}
