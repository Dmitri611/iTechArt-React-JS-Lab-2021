import React from 'react';
import './search.scss';

export default function Search () {
    return (
        <div className="block_search">
            <form action="/search/" target="_blank" className="form_search">
              <input
                className="form_search_input"
                type="hidden"
                name="searchid"
                value="808327"
              />
              <input
                className="form_search_input"
                type="search"
                name="text"
                required
                placeholder="Поиск по сайту"
              />
              <input
                className="form_search_input"
                type="submit"
                value="&#128269;"
              />
            </form>
          </div>
    );
}