import { Router, Request, Response } from 'express';
import { AccountDto } from '../dtos/account.dto';
import { body, validationResult } from 'express-validator';

const accountRouter = Router();
const accountDtos: AccountDto[] = [];

const accountDtoValidationRules = [
  body('name').notEmpty().withMessage('Title is required'),
];

accountRouter.post('/',accountDtoValidationRules, (req: Request, res: Response) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const accountDto: AccountDto = {
    id: accountDtos.length + 1,
    name: req.body.name,
  };

  accountDtos.push(accountDto);
  res.status(201).json(accountDto);
});

accountRouter.get('/', (req: Request, res: Response) => {
  res.json(accountDtos);
});

accountRouter.get('/:id', (req: Request, res: Response) => {
  const accountDto = accountDtos.find((t) => t.id === parseInt(req.params.id));

  if (!accountDto) {
    res.status(404).send('Account not found');
  } else {
    res.json(accountDto);
  }
});

accountRouter.put('/:id', accountDtoValidationRules, (req: Request, res: Response) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const accountDto = accountDtos.find((t) => t.id === parseInt(req.params.id));

  if (!accountDto) {
    res.status(404).send('Account not found');
  } else {
    accountDto.name = req.body.name || accountDto.name;
    res.json(accountDto);
  }
});

accountRouter.delete('/:id', (req: Request, res: Response) => {
  const index = accountDtos.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send('Account not found');
  } else {
    accountDtos.splice(index, 1);
    res.status(204).send();
  }
});

export default accountRouter;
