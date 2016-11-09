import { Directions, IRobotOptions } from '../../src/robot';
import Robot from '../../src/robot';
import { expect } from 'chai';

describe('Robot', () => {
  describe('#new', () => {
    it('should be initialized with default values without params', () => {
      const robot: Robot = new Robot();

      expect(robot.name).to.eq('Robot');
      expect(robot.direction).to.eq(Directions.NORTH);
    });

    it('should be initialized with the given params', () => {
      const options: IRobotOptions = { direction: Directions.SOUTH, name: 'Roby' };
      const robot: Robot = new Robot(options);

      expect(robot.name).to.eq('Roby');
      expect(robot.direction).to.eq(Directions.SOUTH);
    });

    it('should be initialized with the mix of given param and default param', () => {
      const options: IRobotOptions = { direction: Directions.EAST };
      const robot: Robot = new Robot(options);

      expect(robot.name).to.eq('Robot');
      expect(robot.direction).to.eq(Directions.EAST);
    });
  });

  describe('#turnLeft', () => {
    it('should turn the robot left', () => {
      const robot: Robot = new Robot();
      expect(robot.direction).to.eq(Directions.NORTH);

      expect(robot.turnLeft()).to.eq(Directions.WEST);
      expect(robot.direction).to.eq(Directions.WEST);

      expect(robot.turnLeft()).to.eq(Directions.SOUTH);
      expect(robot.direction).to.eq(Directions.SOUTH);

      expect(robot.turnLeft()).to.eq(Directions.EAST);
      expect(robot.turnLeft()).to.eq(Directions.NORTH);
    });
  });

  describe('#turnRight', () => {
    it('should turn the robot right', () => {
      let robot2: Robot = new Robot();
      expect(robot2.direction).to.eq(Directions.NORTH);

      expect(robot2.turnRight()).to.eq(Directions.EAST);
      expect(robot2.direction).to.eq(Directions.EAST);

      expect(robot2.turnRight()).to.eq(Directions.SOUTH);
      expect(robot2.turnRight()).to.eq(Directions.WEST);
      expect(robot2.turnRight()).to.eq(Directions.NORTH);
    });
  });
});
