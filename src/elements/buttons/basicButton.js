import React, { PureComponent } from 'react'
import styled from 'styled-components';

class BasicButton extends PureComponent {
  render() {
    const { label, className, onClick } = this.props;
    return (
      <Button type='button' className={className} onClick={onClick}>{label}</Button>
    );
  }
}

const Button = styled.button`
`;

export default BasicButton;