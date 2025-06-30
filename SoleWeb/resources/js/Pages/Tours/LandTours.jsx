import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';

const LandTours = () => {
  return (
    <MainLayout title="Land Tours - Sole Explorer">
      <PageContainer title="Land Tours">
        <div className="py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Land Tours</h1>
          <p className="text-center max-w-2xl mx-auto">
            Explore the beauty of the land with our exciting land tour packages. 
            From city tours to countryside adventures, we have something for every traveler.
          </p>
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default LandTours;
