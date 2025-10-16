import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { SAMPLE_LISTINGS } from '../constants';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb clone listing page - ALX Listing App" />
      </Head>

      <main className="min-h-screen bg-gray-50 p-6">
        <header className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-semibold mb-2">ALX Listing App</h1>
          <p className="text-gray-600">A simple listing page scaffold for the Airbnb clone project.</p>
        </header>

        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAMPLE_LISTINGS.map((listing) => (
            <Card key={listing.id} {...listing} />
          ))}
        </section>

        <footer className="max-w-4xl mx-auto mt-10">
          <Button onClick={() => alert('This will link to search or booking in later milestones')}>
            Explore more listings
          </Button>
        </footer>
      </main>
    </>
  );
};

export default Home;
