import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function GoogleSearch() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cse.google.com/cse.js?cx=f0f2ea6bccd2c41f7';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Row className="mt-5">
        <h4 style={{ textAlign: 'center', color: '#ED217C' }}>
          Festival Search
        </h4>
      </Row>
      <Row>
        <div className="d-flex justify-content-center mt-3">
          <Link
            to="https://www.cosmopolitan.com/uk/worklife/campus/a36647/festival-survival-tips-hacks/"
            className="mx-2"
            style={{ textDecoration: 'none', color: '#fffb0a' }}
          >
            Tips & Tricks
          </Link>
          <Link
            to="https://luminaid.com/blogs/news/10-tips-to-make-the-most-of-music-festivals"
            className="mx-2"
            style={{ textDecoration: 'none', color: '#fffb0a' }}
          >
            Event News
          </Link>
          <Link
            to="https://www.loopearplugs.com/blogs/blog/how-to-survive-your-first-festival-our-music-festival-guide-for-beginners"
            className="mx-2"
            style={{ textDecoration: 'none', color: '#fffb0a' }}
          >
            Must Haves
          </Link>
        </div>
      </Row>
      <Row style={{ width: '75%', marginTop: '2%' }}>
        <div className="gcse-search"></div>
      </Row>
    </>
  );
}
export default GoogleSearch;
