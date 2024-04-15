// imports dependancies
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// generates google search engine bar
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
        <h4 style={{ textAlign: 'center', color: '#ED217C', textShadow: '1px 1px 3px black' }}>
          Festival Search
        </h4>
      </Row>
      <Row>
        <div className="d-flex justify-content-center mt-3">
          {/** links to external website */}
          <Link
            to="https://www.cosmopolitan.com/uk/worklife/campus/a36647/festival-survival-tips-hacks/"
            className="mx-2"
            style={{ textDecoration: 'none', color: '#fffb0a', textShadow: '1px 1px 3px black' }}
          >
            Tips & Tricks
          </Link>
          <Link
            to="https://luminaid.com/blogs/news/10-tips-to-make-the-most-of-music-festivals"
            className="mx-2"
            style={{ textDecoration: 'none', color: '#fffb0a', textShadow: '1px 1px 3px black' }}
          >
            Event News
          </Link>
          <Link
            to="https://www.loopearplugs.com/blogs/blog/how-to-survive-your-first-festival-our-music-festival-guide-for-beginners"
            className="mx-2"
            style={{ textDecoration: 'none', color: '#fffb0a', textShadow: '1px 1px 3px black' }}
          >
            Must Haves
          </Link>
        </div>
      </Row>
      {/** google search api search engine */}
      <Row style={{ width: '75%', marginTop: '2%' }}>
        <div className="gcse-search"></div>
      </Row>
    </>
  );
}
export default GoogleSearch;
