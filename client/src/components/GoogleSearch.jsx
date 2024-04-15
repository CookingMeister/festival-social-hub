import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function GoogleSearch() {
  //source for google search bar api
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
        <h4 style={{ textAlign: 'center', color: '#ED217C', textShadow: '1px 1px 3px #000000' }}>
          Festival Search
        </h4>
      </Row>
      <Row>
        <div className="d-flex justify-content-center mt-3">
          {/** links to external URLs for music festival info */}
          <Link
            to="https://www.cosmopolitan.com/uk/worklife/campus/a36647/festival-survival-tips-hacks/"
            className="mx-2"
            style={{ textDecoration: 'none', color: '#fffb0a', textShadow: '1px 1px 3px #000000' }}
          >
            Tips & Tricks
          </Link>
          <Link
            to="https://luminaid.com/blogs/news/10-tips-to-make-the-most-of-music-festivals"
            className="mx-2"
            style={{ textDecoration: 'none', color: '#1B998B', textShadow: '1px 1px 3px #000000' }}
          >
            Event News
          </Link>
          <Link
            to="https://www.loopearplugs.com/blogs/blog/how-to-survive-your-first-festival-our-music-festival-guide-for-beginners"
            className="mx-2"
            style={{ textDecoration: 'none', color: '#fffb0a', textShadow: '1px 1px 3px #000000' }}
          >
            Must Haves
          </Link>
        </div>
      </Row>
      {/** displays google search bar */}
      <Row style={{ width: '75%', marginTop: '2%' }}>
        <div className="gcse-search"></div>
      </Row>
    </>
  );
}
export default GoogleSearch;
