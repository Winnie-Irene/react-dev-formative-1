import { Component, type ComponentType } from 'react';

function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  class WithLogger extends Component<P> {
    static displayName = `WithLogger(${WrappedComponent.name || 'Component'})`;

    componentDidMount() {
      console.log(`[withLogger] ${WrappedComponent.name || 'Component'} has mounted`);
    }

    componentWillUnmount() {
      console.log(`[withLogger] ${WrappedComponent.name || 'Component'} has unmounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogger;
}

export default withLogger;