import 'BaseTemplate.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="container">{sampleTextProp}</div>;
};

export default BaseTemplate;
