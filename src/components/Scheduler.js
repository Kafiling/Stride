import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  Appointments,
  Scheduler,
  WeekView,
  CurrentTimeIndicator,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';
import { teal } from '@mui/material/colors';
import classNames from 'clsx';

const appointments = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

const PREFIX = 'Demo';
const classes = {
  line: `${PREFIX}-line`,
  circle: `${PREFIX}-circle`,
  nowIndicator: `${PREFIX}-nowIndicator`,
  shadedCell: `${PREFIX}-shadedCell`,
  shadedPart: `${PREFIX}-shadedPart`,
  appointment: `${PREFIX}-appointment`,
  shadedAppointment: `${PREFIX}-shadedAppointment`,
};
const StyledDiv = styled('div', {
  shouldForwardProp: prop => prop !== 'top',
})(({ theme, top }) => ({
  [`& .${classes.line}`]: {
    height: '2px',
    borderTop: `2px ${theme.palette.primary.main} dotted`,
    width: '100%',
    transform: 'translate(0, -1px)',
  },
  [`& .${classes.circle}`]: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    background: theme.palette.primary.main,
  },
  [`& .${classes.nowIndicator}`]: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top,
  },
}));
const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(({
  theme, currentTimeIndicatorPosition,
}) => ({
  [`&.${classes.shadedCell}`]: {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.12),
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.primary.main, 0.20),
      outline: 0,
    },
  },
  [`& .${classes.shadedPart}`]: {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    position: 'absolute',
    height: currentTimeIndicatorPosition,
    width: '100%',
    left: 0,
    top: 0,
    'td:focus &': {
      backgroundColor: alpha(theme.palette.primary.main, 0.12),
    },
  },
}));

const StyledAppointmentsAppointment = styled(Appointments.Appointment)(() => ({
  [`&.${classes.appointment}`]: {
    backgroundColor: teal[300],
    '&:hover': {
      backgroundColor: teal[400],
    },
  },
  [`&.${classes.shadedAppointment}`]: {
    backgroundColor: teal[200],
    '&:hover': {
      backgroundColor: teal[300],
    },
  },
}));

const TimeIndicator = ({
  top, ...restProps
}) => (
  <StyledDiv top={top} {...restProps}>
    <div className={classNames(classes.nowIndicator, classes.circle)} />
    <div className={classNames(classes.nowIndicator, classes.line)} />
  </StyledDiv>
);

const TimeTableCell = ({
  currentTimeIndicatorPosition, isShaded, ...restProps
}) => {
  const isNow = !!currentTimeIndicatorPosition;
  return (
    <StyledWeekViewTimeTableCell
      isShaded={isShaded && !isNow}
      currentTimeIndicatorPosition={currentTimeIndicatorPosition}
      className={classNames({
        [classes.shadedCell]: isShaded && !isNow,
      })}
      {...restProps}
    >
      {isNow && isShaded && (
        <div className={classes.shadedPart} />
      )}
    </StyledWeekViewTimeTableCell>
  );
};

const Appointment = ({
  isShaded, ...restProps
}) => (
  <StyledAppointmentsAppointment
    className={classNames({
      [classes.appointment]: true,
      [classes.shadedAppointment]: isShaded,
    })}
    {...restProps}
  />
);

export default class SchedulerComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
          height={'50%'}
        >
          <WeekView
            startDayHour={9}
            endDayHour={19}
            timeTableCellComponent={TimeTableCell}
          />
          <Appointments
            appointmentComponent={Appointment}
          />
          <CurrentTimeIndicator
            indicatorComponent={TimeIndicator}
            shadePreviousCells
            shadePreviousAppointments
          />
        </Scheduler>
      </Paper>
    );
  }
}
