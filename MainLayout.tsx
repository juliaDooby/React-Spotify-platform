import Navbar from '../components/navbar';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{margin: '90px 0'}}>
      {children}
      </Container>
    
      }
    </>
  );
};
export default MainLayout;
