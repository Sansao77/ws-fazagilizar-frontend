import React from 'react';
import './pagination.scss';

interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

interface PaginationData {
  current_page: number;
  data?: any[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

interface PaginationProps {
  paginationData: PaginationData;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ paginationData, onPageChange }) => {
  const { current_page, last_page, from, to, total, links } = paginationData;

  const handlePageClick = (link: PaginationLink) => {
    if (!link.url || link.active) return;
    
    // Extrair número da página da URL
    const urlParams = new URLSearchParams(link.url.split('?')[1]);
    const page = parseInt(urlParams.get('page') || '1');
    
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    return links.map((link, index) => {
      // Pular os botões Previous e Next para renderizar apenas os números
      if (link.label.includes('Previous') || link.label.includes('Next')) {
        return null;
      }

      return (
        <button
          key={index}
          className={`pagination__number ${link.active ? 'pagination__number--active' : ''}`}
          onClick={() => handlePageClick(link)}
          disabled={link.active || !link.url}
        >
          {link.label}
        </button>
      );
    });
  };

  const handleFirstPage = () => {
    if (onPageChange) {
      onPageChange(1);
    }
  };

  const handleLastPage = () => {
    if (onPageChange) {
      onPageChange(last_page);
    }
  };

  const renderNavigationButtons = () => {
    const prevLink = links.find(link => link.label.includes('Previous'));
    const nextLink = links.find(link => link.label.includes('Next'));
    
    const canGoPrev = current_page > 1;
    const canGoNext = current_page < last_page;
    const showFirstButton = current_page > 2;
    const showLastButton = current_page < last_page - 1;

    return (
      <>
        {/* Botão primeira página << */}
        {showFirstButton && (
          <button
            className="pagination__nav pagination__nav--first"
            onClick={handleFirstPage}
            title="Primeira página"
          >
            &lt;&lt;
          </button>
        )}
        
        {/* Botão página anterior < */}
        {canGoPrev && (
          <button
            className="pagination__nav pagination__nav--prev"
            onClick={() => prevLink && handlePageClick(prevLink)}
            title="Página anterior"
          >
            &lt;
          </button>
        )}
        
        {renderPageNumbers()}
        
        {/* Botão próxima página > */}
        {canGoNext && (
          <button
            className="pagination__nav pagination__nav--next"
            onClick={() => nextLink && handlePageClick(nextLink)}
            title="Próxima página"
          >
            &gt;
          </button>
        )}
        
        {/* Botão última página >> */}
        {showLastButton && (
          <button
            className="pagination__nav pagination__nav--last"
            onClick={handleLastPage}
            title="Última página"
          >
            &gt;&gt;
          </button>
        )}
      </>
    );
  };

  return (
    <div className="pagination-container">
      <div className="pagination">
        {renderNavigationButtons()}
      </div>
      
      <div className="pagination-info">
        <strong>EXIBINDO PÁGINA {current_page} ATÉ {last_page} DE {total}</strong>
      </div>
    </div>
  );
};

export default Pagination;