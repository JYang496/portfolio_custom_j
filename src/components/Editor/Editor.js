import './Editor.sass'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import {useMemo, useState} from "react";


export function Editor() {
    const [articleInfo, setArticleInfo] = useState({
        title: '',
        content: ''
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
            content: value
        });
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleInfo)
    };

    const Button = ({ onClick, children }) => {
        return (
            <button onClick={onClick}>
                {children}
            </button>
        );
    };

    const handleClick = () => {
        console.log(JSON.stringify(articleInfo))
        fetch('http://localhost:3800/articles', options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: [1, 2, 3, 4, false] }],
                ['bold', 'italic', 'underline'],
                [{ 'color': [] }],
                [{ 'align': [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'code-block']
            ]
        }
    }), [])

    return (
        <div>
            <label className="font-weight-bold"> Title <span className="required"> * </span> </label>
            <input type="text" name="title" value={articleInfo.title} onChange={onChangeValue}  className="form-control" placeholder="Title" required />
            <Button onClick={handleClick}>Submit</Button>
            <ReactQuill
                modules={modules}
                theme='snow'
                value={articleInfo.content}
                onChange={onChangeDescription}
                style={{minHeight: '300px'}}
            />
            <h1>{articleInfo.title}</h1>
            <h1>{articleInfo.content}</h1>
        </div>
    );
}
