import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Privacy-Preserving by Design',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        fundsdb-zkpengine is built with zero-knowledge cryptography at its core, ensuring financial transactions and data remain secure and private while still being verifiable.


      </>
    ),
  },
  {
    title: 'Developer-Friendly API',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Designed for ease of integration, our intuitive API allows developers to generate and verify ZK proofs with minimal setup, making it simple to incorporate privacy-preserving computations into any application.
      </>
    ),
  },
  {
    title: 'Scalable & Efficient',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Optimized for performance, fundsdb-zkpengine provides fast proof generation and verification, making it suitable for high-throughput financial systems, DeFi platforms, and regulatory compliance workflows.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
