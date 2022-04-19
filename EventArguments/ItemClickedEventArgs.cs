using Microsoft.AspNetCore.Components.Web;

using System.Reflection;

namespace Intervip.Razor.Components;
public class ItemClickedEventArgs<T> : MouseEventArgs
{
	public T? Item { get; set; }

	public ItemClickedEventArgs(MouseEventArgs args) : base()
	{
		foreach (PropertyInfo? property in typeof(MouseEventArgs).GetProperties())
		{
			property.SetValue(this, property.GetValue(args, null), null);
		}
	}
}