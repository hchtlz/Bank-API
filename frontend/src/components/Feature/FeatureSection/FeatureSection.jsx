import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import './FeatureSection.css';

import iconChat from '../../../assets/images/icon-chat.png';
import iconMoney from '../../../assets/images/icon-money.png';
import iconSecurity from '../../../assets/images/icon-security.png';

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        iconSrc={iconChat}
        title="You are our #1 priority"
        content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        iconSrc={iconMoney}
        title="More savings means higher rates"
        content="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        iconSrc={iconSecurity}
        title="Security you can trust"
        content="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
};

export default FeaturesSection;