import './Author.css';

const Author = ({ authorName, authorLink }) => {
  return (
    <h6 className="author">
      Made with <strong>love</strong> by{' '}
        <a
          target="_blank"
          href={authorLink}
        >
          {authorName}
        </a>
    </h6>
  );
};

export { Author };
