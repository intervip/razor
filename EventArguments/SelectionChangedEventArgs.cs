namespace Intervip.Razor.Components;

public class SelectionChangedEventArgs<T> : EventArgs
{
	public T? AddedItem { get; init; }
	public T? RemovedItem { get; init; }
}
