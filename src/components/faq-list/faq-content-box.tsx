import * as React from 'react'
import './faq-content-box.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export interface FAQContentBoxProps {
    question: String
    answer: String
}

export class FAQContentBox extends React.Component<FAQContentBoxProps, {}> {
    public render = (): JSX.Element => {
        const { question, answer } = this.props
        
        return (
          <div className='faq-box'>
              <p>
                  {question}
              </p>

              
          </div>
        )
      }
}