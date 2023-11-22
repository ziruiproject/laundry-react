import Card from 'react-bootstrap/Card';
import informasi3 from '../assets/informasi3.png'

function Cards() {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={informasi3} />
      <Card.Body>
        <Card.Title>Fauget Laundry</Card.Title>
        <Card.Text>
          <div>
            <p>2.3 km | Krapyak, Bantul</p>
            <br />
          </div>
          <div className='flex justify-between'>
            <div className='text-center'>
              <h4>Harga Mulai</h4>
              <h5>Rp5.000</h5>
            </div>
            <div className='text-center'>
              <h4>Transaksi</h4>
              <h5>1</h5>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;