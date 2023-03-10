import { Upcoming } from "@mui/icons-material";
import "../scss/Index.scss";

const Index = ({ team }) => {
  const loaded = () => {
    let activeCount = 0;
    let inactiveCount = 0;
    let irCount = 0;

    let diff = Infinity;

    function getUpcomingGame() {
      for (let i = 0; i < team.games.length; i++) {
        if (
          Math.abs(Date.parse(team.games[i].date) - Date.parse(Date())) < diff
        ) {
          diff = Math.abs(Date.parse(team.games[i].date) - Date.parse(Date()));
        }

        return team.games[i];
      }
    }

    const { date, time, home_team, away_team } = getUpcomingGame();

    team.players.forEach((player) => {
      if (player.status === "Active") {
        activeCount++;
      }
      if (player.status === "Inactive") {
        inactiveCount++;
      }
      if (player.status === "IR") {
        irCount++;
      }
    });
    return (
      <div className="index">
        <h1 className="index__heading">
          {team.city} {team.mascot}
        </h1>
        <div className="index__line-divide"></div>
        <div
          className="index__container"
          style={{ borderLeft: `10px solid ${team.team_color}` }}
        >
          <div className="index__game">
            <div className="index__subtitle">Upcoming game</div>
            <div className="index__game-matchup">
              {away_team} @ {home_team}
            </div>
            <div className="index__game-datetime">
              {date} {time}
            </div>
          </div>
          <div className="index__subtitle">Roster</div>
          <div className="index__roster">
            <div className="index__roster-status">
              <span className="index__roster-status-title">Active</span>
              <span className="index__roster-status-num">{activeCount}</span>
            </div>
            <div className="index__roster-status">
              <span className="index__roster-status-title">Inactive</span>
              <span className="index__roster-status-num">{inactiveCount}</span>
            </div>
            <div className="index__roster-status">
              <span className="index__roster-status-title">
                Injured Reserve
              </span>
              <span className="index__roster-status-num">{irCount}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const loading = () => {
    <div className="loading">Loading...</div>;
  };
  return <div>{team ? loaded() : loading()}</div>;
};

export default Index;
