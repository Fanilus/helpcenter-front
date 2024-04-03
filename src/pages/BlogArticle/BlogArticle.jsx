import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import * as Styled from './styled';

import Card from './components/Card/Card';
import useBlog from '../Blog/hook/useBlog';
import Related from './components/Related/Related';
import Content from './components/Content/Content';

const BlogArticle = () => {
  const { blogs } = useBlog();
  const { blog_id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    if (blog_id) {
      setBlog(blogs.find((item) => Number(item.id) === Number(blog_id)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog_id, blog]);
  return (
    <Styled.BlogArticle>
      {blog && (
        <>
          <Card blog={blog} />
          <Content
            content={blog.articleBlog.content}
            tableOfContents={blog.articleBlog.tableOfContents}
          />
          {blog.articleBlog.related && (
            <Related related={blog.articleBlog.related} />
          )}
        </>
      )}
    </Styled.BlogArticle>
  );
};

export default BlogArticle;
