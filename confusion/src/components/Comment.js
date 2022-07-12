import Avatar from './Avatar';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div>
            <div>
                <Avatar user={props.author} />
                <div>{props.author.name}</div>
            </div>
            <div>{props.text}</div>
            <div>{formatDate(props.date)}</div>
        </div>
    );
}

export default Comment;