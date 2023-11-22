import Card from 'react-bootstrap/Card';
import stars from '../assets/stars.png'

function Cards(props) {
  return (
    <Card key={props.id} style={{ width: '28rem', borderRadius: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title style={{display: 'flex', paddingLeft: '16px', fontSize: '24px'}}><b>{props.name}</b></Card.Title>
        <Card.Text>
          <div className='flex pl-4'>
            <p>{props.locate}</p>
          </div>
          <div className='flex justify-between px-4 py-3'>
            <div>
              <h4>Harga Mulai</h4>
              <h5>{props.price}</h5>
            </div>
            <div>
              <h4>Transaksi</h4>
              <h5>{props.transaction}</h5>
            </div>
          </div>
          <div className='flex justify-end'>
            <img className='w-7 h-7' src={stars} alt="" />
            <p className='pt-1'>{props.rate}</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;