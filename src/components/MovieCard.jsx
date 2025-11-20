jsx
const MovieCard = ({ item, type, onLike, onReserve, onComment }) => {
  // Estado local para mostrar/ocultar comentarios
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');


  // Función para manejar envío de comentarios
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(item.id, commentText);
      setCommentText('');
    }
  };


  return (
    <div className="movie-card">
      {/* Imagen de la película/serie */}
      <img 
        src={item.poster_path 
          ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
          : '/placeholder-image.jpg'
        } 
        alt={item.title || item.name}
      />
      
      {/* Información y acciones */}
      <div className="movie-info">
        <h3>{item.title || item.name}</h3>
        <p>{item.overview?.substring(0, 150)}...</p>
        
        {/* Botones de interacción */}
        <div className="actions">
          <button onClick={() => onLike(item.id)}>
            ❤️ {item.likes || 0}
          </button>
          {/* Más botones... */}
        </div>
      </div>
    </div>
  );
};
