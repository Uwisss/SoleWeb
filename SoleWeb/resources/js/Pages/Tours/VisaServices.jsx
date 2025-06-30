import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';

const VisaServices = () => {
  return (
    <MainLayout title="Visa Services - Sole Explorer">
      <PageContainer title="Visa Services">
        <div className="py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Visa Services</h1>
          <p className="text-center max-w-2xl mx-auto">
            Let us handle your visa application process. We provide assistance with various types of visas
            to make your international travel plans smoother and hassle-free.
          </p>
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default VisaServices;
