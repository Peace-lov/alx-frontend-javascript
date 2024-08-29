export default function

guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(Stringerr));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
