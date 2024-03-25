import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';
import Footer from './Footer';
function Recipe() {
  const staticJobPostings = [
    {
      id: 1,
      name: 'Dessert Buffet',
      description: 'Indulge in Sweet Delights: Your Dessert Buffet Haven!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Non-Veg Buffet',
      description: 'Feast on Flavors: Your Ultimate Non-Veg Buffet Experience!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Sea Food Combo',
      description: 'From the Oceans Bounty: Dive into Our Delectable Seafood Combo!.Suitable for 30+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Barbebque World',
      description: 'Grill & Chill: Indulge in the Flavors of Barbecue Paradise!.Suitable for 100+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'Wine Party',
      description: 'Sip, Savor, and Socialize: Elevate Your Evening with Fine Wine!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      name: 'Veg Buffet',
      description: 'Indulge in Natures Bounty: Our Veg Buffet Delights Await!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/20475941/pexels-photo-20475941/free-photo-of-people-on-dinner-during-ramadan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 7,
        name: 'Pasta Feast',
        description: 'Delight in Italian Perfection: Our Pasta Feast Awaits!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/17184357/pexels-photo-17184357/free-photo-of-pasta-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 8,
        name: 'Sushi Selection',
        description: 'Savor the Flavors of Japan: Dive into Our Sushi Selection!. Suitable for 20+ people.',
        imageUrl: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 9,
        name: 'Gourmet Pizza Party',
        description: 'Indulge in Gourmet Pizzas: Your Pizza Party Dreams Come True!. Suitable for 40+ people.',
        imageUrl: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 10,
        name: 'Taco Bar',
        description: 'Build Your Own Tacos: Spice Up Your Event with Our Taco Bar!. Suitable for 50+ people.',
        imageUrl: 'https://images.pexels.com/photos/17167906/pexels-photo-17167906/free-photo-of-bottles-of-alcohol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 11,
        name: 'Burger Bonanza',
        description: 'Satisfy Your Cravings: Our Burger Bonanza Will Leave You Wanting More!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 12,
        name: 'Salad Spread',
        description: 'Fresh and Flavorful: Our Salad Spread Adds a Healthy Touch to Any Event!. Suitable for 20+ people.',
        imageUrl: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 13,
        name: 'Cheese Platter',
        description: 'Elevate Your Tastebuds: Our Cheese Platter Offers a Symphony of Flavors!. Suitable for 20+ people.',
        imageUrl: 'https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 14,
        name: 'Fruit Fiesta',
        description: 'Nature\'s Sweetness: Our Fruit Fiesta Adds a Refreshing Twist to Your Event!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 15,
        name: 'Deli Delights',
        description: 'Something for Everyone: Our Deli Delights Spread Will Please Every Palate!. Suitable for 40+ people.',
        imageUrl: 'https://images.pexels.com/photos/7393901/pexels-photo-7393901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 16,
        name: 'BBQ Ribs',
        description: 'Fall-Off-The-Bone Goodness: Our BBQ Ribs Will Have You Licking Your Fingers!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 1,
      name: 'Dessert Buffet',
      description: 'Indulge in Sweet Delights: Your Dessert Buffet Haven!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Non-Veg Buffet',
      description: 'Feast on Flavors: Your Ultimate Non-Veg Buffet Experience!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Sea Food Combo',
      description: 'From the Oceans Bounty: Dive into Our Delectable Seafood Combo!.Suitable for 30+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Barbebque World',
      description: 'Grill & Chill: Indulge in the Flavors of Barbecue Paradise!.Suitable for 100+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'Wine Party',
      description: 'Sip, Savor, and Socialize: Elevate Your Evening with Fine Wine!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      name: 'Veg Buffet',
      description: 'Indulge in Natures Bounty: Our Veg Buffet Delights Await!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/20475941/pexels-photo-20475941/free-photo-of-people-on-dinner-during-ramadan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 7,
        name: 'Pasta Feast',
        description: 'Delight in Italian Perfection: Our Pasta Feast Awaits!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/17184357/pexels-photo-17184357/free-photo-of-pasta-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 8,
        name: 'Sushi Selection',
        description: 'Savor the Flavors of Japan: Dive into Our Sushi Selection!. Suitable for 20+ people.',
        imageUrl: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 9,
        name: 'Gourmet Pizza Party',
        description: 'Indulge in Gourmet Pizzas: Your Pizza Party Dreams Come True!. Suitable for 40+ people.',
        imageUrl: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 10,
        name: 'Taco Bar',
        description: 'Build Your Own Tacos: Spice Up Your Event with Our Taco Bar!. Suitable for 50+ people.',
        imageUrl: 'https://images.pexels.com/photos/17167906/pexels-photo-17167906/free-photo-of-bottles-of-alcohol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 11,
        name: 'Burger Bonanza',
        description: 'Satisfy Your Cravings: Our Burger Bonanza Will Leave You Wanting More!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 12,
        name: 'Salad Spread',
        description: 'Fresh and Flavorful: Our Salad Spread Adds a Healthy Touch to Any Event!. Suitable for 20+ people.',
        imageUrl: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 13,
        name: 'Cheese Platter',
        description: 'Elevate Your Tastebuds: Our Cheese Platter Offers a Symphony of Flavors!. Suitable for 20+ people.',
        imageUrl: 'https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 14,
        name: 'Fruit Fiesta',
        description: 'Nature\'s Sweetness: Our Fruit Fiesta Adds a Refreshing Twist to Your Event!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 15,
        name: 'Deli Delights',
        description: 'Something for Everyone: Our Deli Delights Spread Will Please Every Palate!. Suitable for 40+ people.',
        imageUrl: 'https://images.pexels.com/photos/7393901/pexels-photo-7393901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 16,
        name: 'BBQ Ribs',
        description: 'Fall-Off-The-Bone Goodness: Our BBQ Ribs Will Have You Licking Your Fingers!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 1,
      name: 'Dessert Buffet',
      description: 'Indulge in Sweet Delights: Your Dessert Buffet Haven!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Non-Veg Buffet',
      description: 'Feast on Flavors: Your Ultimate Non-Veg Buffet Experience!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Sea Food Combo',
      description: 'From the Oceans Bounty: Dive into Our Delectable Seafood Combo!.Suitable for 30+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Barbebque World',
      description: 'Grill & Chill: Indulge in the Flavors of Barbecue Paradise!.Suitable for 100+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'Wine Party',
      description: 'Sip, Savor, and Socialize: Elevate Your Evening with Fine Wine!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      name: 'Veg Buffet',
      description: 'Indulge in Natures Bounty: Our Veg Buffet Delights Await!.Suitable for 50+ peoples.',
      imageUrl: 'https://images.pexels.com/photos/20475941/pexels-photo-20475941/free-photo-of-people-on-dinner-during-ramadan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 7,
        name: 'Pasta Feast',
        description: 'Delight in Italian Perfection: Our Pasta Feast Awaits!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/17184357/pexels-photo-17184357/free-photo-of-pasta-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 8,
        name: 'Sushi Selection',
        description: 'Savor the Flavors of Japan: Dive into Our Sushi Selection!. Suitable for 20+ people.',
        imageUrl: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 9,
        name: 'Gourmet Pizza Party',
        description: 'Indulge in Gourmet Pizzas: Your Pizza Party Dreams Come True!. Suitable for 40+ people.',
        imageUrl: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 10,
        name: 'Taco Bar',
        description: 'Build Your Own Tacos: Spice Up Your Event with Our Taco Bar!. Suitable for 50+ people.',
        imageUrl: 'https://images.pexels.com/photos/17167906/pexels-photo-17167906/free-photo-of-bottles-of-alcohol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 11,
        name: 'Burger Bonanza',
        description: 'Satisfy Your Cravings: Our Burger Bonanza Will Leave You Wanting More!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 12,
        name: 'Salad Spread',
        description: 'Fresh and Flavorful: Our Salad Spread Adds a Healthy Touch to Any Event!. Suitable for 20+ people.',
        imageUrl: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 13,
        name: 'Cheese Platter',
        description: 'Elevate Your Tastebuds: Our Cheese Platter Offers a Symphony of Flavors!. Suitable for 20+ people.',
        imageUrl: 'https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 14,
        name: 'Fruit Fiesta',
        description: 'Nature\'s Sweetness: Our Fruit Fiesta Adds a Refreshing Twist to Your Event!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 15,
        name: 'Deli Delights',
        description: 'Something for Everyone: Our Deli Delights Spread Will Please Every Palate!. Suitable for 40+ people.',
        imageUrl: 'https://images.pexels.com/photos/7393901/pexels-photo-7393901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 16,
        name: 'BBQ Ribs',
        description: 'Fall-Off-The-Bone Goodness: Our BBQ Ribs Will Have You Licking Your Fingers!. Suitable for 30+ people.',
        imageUrl: 'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
      
    
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = staticJobPostings.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <div className='hero'>
        <h2 className="hero-head">Choose Your Pack!</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Foods..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="job-list">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div className="job" key={product.id}>
                <img src={product.imageUrl} alt={product.name} className="st" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/BookingForm`}>Book</Link>
              </div>
            ))
          ) : (
            staticJobPostings.map((product) => (
              <div className="job" key={product.id}>
                <img src={product.imageUrl} alt={product.name} className="st" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/BookingForm`}>Book</Link>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Recipe;
