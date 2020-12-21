import { POIList } from 'domain/POI/POI';
import { TreksList } from 'domain/Trek/Trek';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { selectPOIList } from 'redux/POI';
import { getPOIList } from 'redux/POI/actions';
import { selectTreksList } from 'redux/Trek';
import { getTreksList } from 'redux/Trek/actions';
import { RootState } from 'redux/types';
import { Home } from './Home';

export type WrapperProps = {
  POIList?: POIList | null;
  TreksList?: TreksList | null;
  getPOIList: () => void;
  getTreksList: () => void;
};

const mapStateToProps = (state: RootState) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  POIList: selectPOIList(state),
  TreksList: selectTreksList(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPOIList: () => dispatch(getPOIList.request({ language: 'fr', page: 1, page_size: 10 })),
  getTreksList: () => dispatch(getTreksList.request({ language: 'fr', page: 1, page_size: 10 })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
